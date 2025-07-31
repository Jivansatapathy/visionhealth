import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Briefcase, 
  Clock, 
  DollarSign, 
  Heart, 
  GraduationCap,
  Users,
  Phone,
  ArrowRight,
  CheckCircle,
  MapPin
} from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-healthcare-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build a Purpose-Driven Career in Healthcare
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join a team where your passion for helping others becomes a thriving career. 
              We provide the support, mentorship, and flexibility you need to succeed.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Why Choose Vision Health Connect?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just a healthcare staffing company – we're your career partner committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Continuous Learning",
                description: "Access to professional development, certifications, and training programs"
              },
              {
                icon: Users,
                title: "Mentorship Support",
                description: "One-on-one guidance from experienced healthcare professionals"
              },
              {
                icon: Clock,
                title: "Flexible Schedules",
                description: "Work arrangements that fit your lifestyle and personal commitments"
              },
              {
                icon: DollarSign,
                title: "Competitive Benefits",
                description: "Excellent compensation packages with health insurance and retirement plans"
              },
              {
                icon: Heart,
                title: "Meaningful Work",
                description: "Make a real difference in patients' lives and recovery journeys"
              },
              {
                icon: Briefcase,
                title: "Career Growth",
                description: "Clear advancement paths and leadership development opportunities"
              }
            ].map((benefit, index) => (
              <Card key={index} className="healthcare-card text-center animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="bg-healthcare-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="healthcare-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Get answers to common questions about careers with Vision Health Connect
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4 animate-on-scroll">
              <AccordionItem value="item-1" className="healthcare-card">
                <AccordionTrigger className="text-left p-6 hover:no-underline">
                  What types of positions are available?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  We offer positions for Physical Therapists, Occupational Therapists, Speech Language Pathologists, 
                  Physical Therapy Assistants, Occupational Therapy Assistants, and various support roles. 
                  Positions are available in hospitals, outpatient clinics, skilled nursing facilities, and home health settings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="healthcare-card">
                <AccordionTrigger className="text-left p-6 hover:no-underline">
                  What shifts and schedules are available?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  We offer flexible scheduling including full-time, part-time, per diem, and contract positions. 
                  Shifts include days, evenings, nights, and weekends. We work with you to find arrangements 
                  that fit your lifestyle and career goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="healthcare-card">
                <AccordionTrigger className="text-left p-6 hover:no-underline">
                  What benefits do you offer?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  Our comprehensive benefits package includes health, dental, and vision insurance, 401(k) with company match, 
                  paid time off, continuing education reimbursement, professional liability insurance, and referral bonuses. 
                  Benefits vary by position type and work arrangement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="healthcare-card">
                <AccordionTrigger className="text-left p-6 hover:no-underline">
                  Do you provide professional development opportunities?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  Yes! We offer continuing education reimbursement, access to online training platforms, 
                  mentorship programs, and opportunities to attend conferences and workshops. 
                  We're committed to helping you advance your career and stay current with best practices.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="healthcare-card">
                <AccordionTrigger className="text-left p-6 hover:no-underline">
                  How do I apply and what's the process?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  Simply click "Apply Now" or contact our career specialists. The process includes an initial consultation, 
                  credential verification, skills assessment, and placement matching. We guide you through every step 
                  and provide ongoing support throughout your career journey with us.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Current Opportunities
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our current openings and find your perfect fit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Physical Therapist",
                location: "Multiple Locations",
                type: "Full-time / Part-time",
                description: "Join our team to help patients restore mobility and improve quality of life"
              },
              {
                title: "Occupational Therapist",
                location: "Hospital & Outpatient",
                type: "Contract / Permanent",
                description: "Help patients regain independence in daily activities and meaningful occupations"
              },
              {
                title: "Speech Language Pathologist",
                location: "Schools & Clinics",
                type: "Full-time",
                description: "Support patients with communication and swallowing disorders"
              },
              {
                title: "PT Assistant",
                location: "Skilled Nursing",
                type: "Part-time / Per Diem",
                description: "Work alongside licensed therapists to provide quality patient care"
              },
              {
                title: "Pediatric Therapist",
                location: "Early Intervention",
                type: "Full-time",
                description: "Specialize in developmental therapy for children and families"
              },
              {
                title: "Home Health Therapist",
                location: "Community-based",
                type: "Flexible Schedule",
                description: "Provide therapy services in patients' homes and communities"
              }
            ].map((job, index) => (
              <Card key={index} className="healthcare-card animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{job.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.type}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <Button className="btn-healthcare-secondary w-full">
                    Apply Now
                  </Button>
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
              Ready to Start Your Healthcare Career Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Speak with our career specialists today and discover opportunities that align with your goals.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
              <Phone className="mr-2 h-5 w-5" />
              Speak to a Career Specialist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;