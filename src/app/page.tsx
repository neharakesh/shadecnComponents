import {Anouncement} from "@/components/anouncement";
import { Rocket } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Anouncement
        title="AI Dashboard is live 🚀"
        description="Experience next-gen analytics with real-time insights."
        icon={<span>✨</span>}
        
      />
    </div>
  );
}
