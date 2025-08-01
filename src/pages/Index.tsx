import { useEffect } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Counter from '@/components/ui/counter';
import { 
  Heart, 
  Users, 
  Clock, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Stethoscope,
  Activity,
  Baby,
  Dumbbell,
  Building2,
  Star,
  Phone
} from 'lucide-react';
import heroBackground from '@/assets/banner.avif';

const Index = () => {
  useScrollAnimation();
  
  useEffect(() => {
    console.log('Index component mounted');
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      >
        <img 
          src={heroBackground} 
          alt="Healthcare Banner" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-healthcare-blue/30 z-10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float z-20">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
            <Heart className="h-10 w-10 text-white" />
          </div>
        </div>
        <div className="absolute bottom-32 right-20 animate-float z-20" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
            <Stethoscope className="h-8 w-8 text-white" />
          </div>
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              A Thriving Career in 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"> Healthcare</span>
              <br />Begins Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Caring for You, So You Can Change Lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Health Connect Difference */}
      <section className="healthcare-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              The Vision Health Connect Difference
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We don't just find you a job – we build your career. With personalized mentorship, 
              comprehensive support, and unlimited growth opportunities, your success is our mission.
            </p>
            <Button className="btn-healthcare-primary text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Speak to a Career Specialist
            </Button>
          </div>
        </div>
      </section>

      {/* Career Growth Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Your Career Growth is Our Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "We Are There for You",
                description: "24/7 support and guidance throughout your healthcare journey"
              },
              {
                icon: Users,
                title: "We Help You Grow",
                description: "Continuous learning opportunities and professional development"
              },
              {
                icon: Clock,
                title: "We Work Around You",
                description: "Flexible schedules that fit your lifestyle and commitments"
              },
              {
                icon: Shield,
                title: "We Care Like You",
                description: "Compassionate support because we understand healthcare professionals"
              }
            ].map((item, index) => (
              <Card key={index} className="healthcare-card text-center animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="bg-healthcare-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="healthcare-section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Promise
            </h2>
            <p className="text-2xl text-primary mb-8 font-medium">
              "Get a response in 24 hours – your future matters"
            </p>
            <Button className="btn-healthcare-primary text-lg px-8 py-4 animate-pulse-glow">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services Highlights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive healthcare services that transform lives and build communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: Activity,
                title: "Physical Therapy",
                description: "Restore mobility and strength with expert physical rehabilitation"
              },
              {
                icon: Stethoscope,
                title: "Occupational Therapy",
                description: "Help patients regain independence in daily living activities"
              },
              {
                icon: Baby,
                title: "Pediatrics",
                description: "Specialized care for children's unique developmental needs"
              },
              {
                icon: Dumbbell,
                title: "Sports Rehab",
                description: "Get athletes back to peak performance safely and effectively"
              }
            ].map((service, index) => (
              <Card key={index} className="healthcare-card text-center group animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="bg-healthcare-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center animate-on-scroll">
            <Button className="btn-healthcare-secondary text-lg px-8 py-4">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partner with Us */}
      <section className="healthcare-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <Building2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Partner with Us
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Empower Your Rehab Department with our expertise and dedicated professionals
            </p>
            <Button className="btn-healthcare-primary text-lg px-8 py-4">
              Partner with Vision Health Connect
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-on-scroll">
              <div className="text-5xl md:text-6xl font-bold mb-4">
                <Counter target={1700} suffix="+" />
              </div>
              <p className="text-xl text-blue-100">Careers Formed</p>
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-4">
                <Counter target={60} suffix="+" />
              </div>
              <p className="text-xl text-blue-100">Facilities Improved</p>
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-4">
                <Counter target={65} suffix="M+" />
              </div>
              <p className="text-xl text-blue-100">Care Plans Administered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Our People Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Physical Therapist",
                content: "Vision Health Connect didn't just find me a job, they found me a career path. The mentorship and support have been incredible.",
                rating: 5
              },
              {
                name: "Dr. Michael Chen",
                role: "Occupational Therapist",
                content: "The flexibility and professional growth opportunities here are unmatched. I can truly make a difference in patients' lives.",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Pediatric Specialist",
                content: "Working with Vision Health Connect has been transformative. The team genuinely cares about your success and wellbeing.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="healthcare-card animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Bonus */}
      <section className="py-16 bg-gradient-to-r from-healthcare-light-blue to-blue-50">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Referral Bonus
            </h2>
            <p className="text-xl text-primary mb-6">
              Refer a friend and earn ₹2,000!
            </p>
            <Button className="btn-healthcare-primary text-lg px-8 py-4">
              Refer Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Talk to a Career Specialist & Spark Your Growth
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to take the next step in your healthcare career? Our specialists are here to guide you.
            </p>
            <Button size="lg" className="bg-white hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
              <Phone className="mr-2 h-5 w-5 text-black" />
              <span className="text-black font-bold">Start Your Journey Today</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;