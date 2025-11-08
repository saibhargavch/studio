import React from 'react';
import { SectionTitle } from '@/components/section-title';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function ResumeViewerSection() {
  // Google Drive URL for the PDF
  const resumePdfUrl = "https://drive.google.com/file/d/13UQ266NF0ynMEY3xNVJTzJr9c5W386tB/view?usp=sharing";
  
  // Modify the URL to make it embeddable
  const embedUrl = resumePdfUrl.replace("/view?usp=sharing", "/preview");

  return (
    <section id="resume" className="bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle>My Resume</SectionTitle>
        <div className="flex justify-center mb-8">
            <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="shadow-md hover:shadow-lg hover:border-accent/70 hover:bg-accent/10 transition-all">
                Download as PDF
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
        </div>
        <div className="w-full max-w-4xl mx-auto border rounded-lg overflow-hidden shadow-lg bg-secondary" style={{ height: '80vh' }}>
          <iframe
            src={embedUrl}
            className="w-full h-full"
            title="Chitteti Sai Bhargav Resume"
            frameBorder="0"
          >
            Your browser does not support iframes. Please <a href={resumePdfUrl} target="_blank" rel="noopener noreferrer">download the resume</a> to view it.
          </iframe>
        </div>
      </div>
    </section>
  );
}
