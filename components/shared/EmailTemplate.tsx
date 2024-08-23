import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Thanks for joining Kickstart, you will be notified about further development of Kickstart by mail.</p>
    <img src='/logo.svg'></img>
  </div>
);
