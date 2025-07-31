import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Target, Award, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-healthcare-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Vision Health Connect
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Transforming healthcare careers and patient outcomes through dedicated 
              professionals and innovative rehabilitation services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower healthcare professionals with meaningful career opportunities 
                while delivering exceptional rehabilitation services that transform lives. 
                We believe that when we care for our people, they can provide extraordinary 
                care for our patients.
              </p>
              <div className="space-y-4">
                {[
                  "Personalized career development",
                  "Comprehensive mentorship programs",
                  "Flexible work arrangements",
                  "Continuous professional growth"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll">
              <Card className="healthcare-card">
                <CardContent className="p-8 text-center">
                  <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the leading healthcare staffing and rehabilitation services 
                    provider, recognized for our commitment to excellence, innovation, 
                    and the success of both our professionals and patients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="healthcare-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We lead with empathy and understanding in all our interactions"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for the highest standards in everything we deliver"
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in the power of teamwork and shared success"
              }
            ].map((value, index) => (
              <Card key={index} className="healthcare-card text-center animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="bg-healthcare-light-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-primary mb-6">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate leaders driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Williams",
                role: "Chief Executive Officer",
                bio: "20+ years in healthcare management and rehabilitation services"
              },
              {
                name: "Michael Johnson",
                role: "Chief Operations Officer", 
                bio: "Former hospital administrator with expertise in operational excellence"
              },
              {
                name: "Dr. Lisa Chen",
                role: "Clinical Director",
                bio: "Licensed physical therapist and clinical practice leader"
              }
            ].map((leader, index) => (
              <Card key={index} className="healthcare-card text-center animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-healthcare-light-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{leader.name}</h3>
                  <p className="text-sm text-primary mb-3 font-medium">{leader.role}</p>
                  <p className="text-muted-foreground text-sm">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Become part of a team that's transforming healthcare careers and patient lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8 py-4">
                Explore Careers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;