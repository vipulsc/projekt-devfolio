import { CalcomWidget } from "@calcom/react-widget";

export default function Contact() {
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <CalcomWidget
        schedulingLink="YOUR_SCHEDULING_LINK_HERE"
        buttonText="Book my Cal"
      />
    </div>
  );
}
