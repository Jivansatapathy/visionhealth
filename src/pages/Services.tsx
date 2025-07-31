import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { 
  Activity, 
  Stethoscope, 
  Baby, 
  Dumbbell, 
  Heart, 
  Brain,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  useScrollAnimation();
  
  useEffect(() => {
    console.log('Services component mounted');
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-healthcare-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Care that Transforms Lives
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive rehabilitation services delivered by passionate 
              professionals who make a difference every day.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-muted-foreground">
              We provide specialized rehabilitation services for patients and facilities, 
              combining clinical expertise with compassionate care to achieve the best outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Activity,
                title: "Physical Therapy",
                description: "Restore mobility, reduce pain, and improve function through evidence-based physical rehabilitation techniques.",
                features: [
                  "Manual therapy and therapeutic exercises",
                  "Post-surgical rehabilitation",
                  "Chronic pain management",
                  "Mobility and balance training"
                ]
              },
              {
                icon: Stethoscope,
                title: "Occupational Therapy",
                description: "Help patients regain independence in daily activities and return to meaningful occupations.",
                features: [
                  "Activities of daily living training",
                  "Cognitive rehabilitation",
                  "Workplace injury recovery",
                  "Assistive technology training"
                ]
              },
              {
                icon: Baby,
                title: "Pediatric Therapy",
                description: "Specialized care for children's unique developmental and rehabilitation needs.",
                features: [
                  "Developmental assessments",
                  "Early intervention services",
                  "School-based therapy",
                  "Family education and support"
                ]
              },
              {
                icon: Dumbbell,
                title: "Sports Rehabilitation",
                description: "Get athletes back to peak performance safely and effectively after injury.",
                features: [
                  "Sports-specific training",
                  "Injury prevention programs",
                  "Performance optimization",
                  "Return-to-sport protocols"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="healthcare-card animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="bg-healthcare-light-blue rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Methods */}
      <section className="healthcare-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Advanced Methods & Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use cutting-edge technology and evidence-based methods to deliver superior outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Evidence-Based Practice",
                description: "All treatments are based on the latest research and clinical evidence"
              },
              {
                icon: Heart,
                title: "Patient-Centered Care",
                description: "Individualized treatment plans focused on each patient's unique goals"
              },
              {
                icon: Star,
                title: "Outcome Tracking",
                description: "Comprehensive progress monitoring and outcome measurement"
              }
            ].map((method, index) => (
              <Card key={index} className="healthcare-card text-center animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="bg-healthcare-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{method.title}</h3>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Highly qualified and experienced therapists",
              "Personalized treatment approaches",
              "State-of-the-art equipment and facilities",
              "Flexible scheduling options",
              "Insurance coordination and billing",
              "Comprehensive progress reporting"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Partner with Vision Health Connect
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to enhance your rehabilitation services or explore career opportunities? 
              Let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8 py-4">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;