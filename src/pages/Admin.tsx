import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  LogOut, 
  Users, 
  MessageSquare, 
  Phone, 
  Mail, 
  Calendar,
  Wrench,
  Shield,
  AlertTriangle,
  Loader2
} from "lucide-react";
import type { User as SupabaseUser, Session } from '@supabase/supabase-js';

interface ContactSubmission {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email?: string;
  service_type: string;
  device_details?: string;
  issue_description: string;
  preferred_contact_time?: string;
}

interface UserRole {
  id: string;
  user_id: string;
  role: string;
  created_at: string;
}

const Admin = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session?.user) {
          navigate("/auth");
        } else {
          // Defer role check and data fetching
          setTimeout(() => {
            checkUserRole(session.user.id);
          }, 0);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (!session?.user) {
        navigate("/auth");
      } else {
        setTimeout(() => {
          checkUserRole(session.user.id);
        }, 0);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkUserRole = async (userId: string) => {
    try {
      const { data: roles, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId);

      if (error) {
        console.error('Error checking user role:', error);
        setError("You don't have permission to access this page.");
        setLoading(false);
        return;
      }

      const adminOrStaff = roles?.find(r => r.role === 'admin' || r.role === 'staff');
      
      if (!adminOrStaff) {
        setError("You don't have permission to access this page. Contact an administrator to get access.");
        setLoading(false);
        return;
      }

      setUserRole(adminOrStaff.role);
      await fetchSubmissions();
    } catch (error) {
      console.error('Error in checkUserRole:', error);
      setError("Failed to verify permissions.");
      setLoading(false);
    }
  };

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching submissions:', error);
        setError("Failed to load contact submissions.");
        return;
      }

      setSubmissions(data || []);
    } catch (error) {
      console.error('Error in fetchSubmissions:', error);
      setError("Failed to load contact submissions.");
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      navigate("/");
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getServiceIcon = (serviceType: string) => {
    if (serviceType.toLowerCase().includes('repair')) {
      return <Wrench className="w-4 h-4" />;
    }
    return <MessageSquare className="w-4 h-4" />;
  };

  const getUrgencyBadge = (serviceType: string) => {
    const urgentServices = ['repair', 'data recovery', 'virus removal'];
    const isUrgent = urgentServices.some(service => 
      serviceType.toLowerCase().includes(service.toLowerCase())
    );
    
    return isUrgent ? (
      <Badge variant="destructive" className="text-xs">
        <AlertTriangle className="w-3 h-3 mr-1" />
        Urgent
      </Badge>
    ) : (
      <Badge variant="outline" className="text-xs">
        Standard
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <Alert variant="destructive">
              <Shield className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            <div className="mt-4 space-y-2">
              <Button onClick={() => navigate("/")} variant="outline" className="w-full">
                Go Home
              </Button>
              <Button onClick={() => navigate("/auth")} className="w-full">
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                  Welcome back, {user?.email} ({userRole})
                </p>
              </div>
            </div>
            <Button onClick={signOut} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-glow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-primary mr-3" />
                <div>
                  <p className="text-2xl font-bold font-heading">{submissions.length}</p>
                  <p className="text-sm text-muted-foreground">Total Submissions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-glow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <AlertTriangle className="w-8 h-8 text-destructive mr-3" />
                <div>
                  <p className="text-2xl font-bold font-heading">
                    {submissions.filter(s => 
                      ['repair', 'data recovery', 'virus removal'].some(service => 
                        s.service_type.toLowerCase().includes(service.toLowerCase())
                      )
                    ).length}
                  </p>
                  <p className="text-sm text-muted-foreground">Urgent Requests</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-glow">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-accent mr-3" />
                <div>
                  <p className="text-2xl font-bold font-heading">
                    {submissions.filter(s => {
                      const today = new Date();
                      const submissionDate = new Date(s.created_at);
                      return submissionDate.toDateString() === today.toDateString();
                    }).length}
                  </p>
                  <p className="text-sm text-muted-foreground">Today's Requests</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Submissions List */}
        <Card className="border-glow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            {submissions.length === 0 ? (
              <div className="text-center py-8">
                <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No contact submissions yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {submissions.map((submission) => (
                  <Card key={submission.id} className="border border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {getServiceIcon(submission.service_type)}
                          <div>
                            <h3 className="font-semibold">{submission.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(submission.created_at)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getUrgencyBadge(submission.service_type)}
                          <Badge variant="outline">{submission.service_type}</Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{submission.phone}</span>
                        </div>
                        {submission.email && (
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">{submission.email}</span>
                          </div>
                        )}
                      </div>
                      
                      {submission.device_details && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-1">Device Details:</h4>
                          <p className="text-sm text-muted-foreground">{submission.device_details}</p>
                        </div>
                      )}
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-1">Issue Description:</h4>
                        <p className="text-sm text-muted-foreground">{submission.issue_description}</p>
                      </div>
                      
                      {submission.preferred_contact_time && (
                        <div>
                          <h4 className="text-sm font-medium mb-1">Preferred Contact Time:</h4>
                          <p className="text-sm text-muted-foreground">{submission.preferred_contact_time}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;