import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-healthcare-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to take the next step? We're here to help you succeed. 
              Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <Card className="healthcare-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-foreground">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Your first name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-foreground">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Your last name"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+91 9876543210"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-foreground">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help you?"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-foreground">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your interests, questions, or how we can assist you..."
                        rows={5}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button type="submit" className="btn-healthcare-primary w-full text-lg py-3">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-on-scroll">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're interested in career opportunities or partnership opportunities, 
                  we're here to help. Reach out to us through any of the channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="healthcare-card">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-healthcare-light-blue rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Phone</h3>
                      <p className="text-muted-foreground mb-2">Call us for immediate assistance</p>
                      <a href="tel:+919876543210" className="text-primary font-medium hover:underline">
                        +91 9876543210
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="healthcare-card">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-healthcare-light-blue rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                      <p className="text-muted-foreground mb-2">Send us an email anytime</p>
                      <a href="mailto:careers@visionhealthconnect.com" className="text-primary font-medium hover:underline">
                        careers@visionhealthconnect.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="healthcare-card">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-healthcare-light-blue rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Office</h3>
                      <p className="text-muted-foreground mb-2">Visit us at our headquarters</p>
                      <p className="text-foreground">
                        123 Healthcare Plaza<br />
                        Medical District<br />
                        Mumbai, Maharashtra 400001
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="healthcare-card">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-healthcare-light-blue rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Business Hours</h3>
                      <div className="text-foreground space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-healthcare-grey">
        <div className="container mx-auto px-4">
          <div className="healthcare-card rounded-xl overflow-hidden animate-on-scroll">
            {/* Placeholder for Google Map */}
            <div className="bg-muted h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                <p className="text-sm text-muted-foreground">123 Healthcare Plaza, Medical District, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't wait – your healthcare career journey starts with a single conversation. 
              Contact our career specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8 py-4">
                <MessageCircle className="mr-2 h-5 w-5" />
                Apply Today
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;