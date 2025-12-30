import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[60vh] w-full flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 bg-white/5 border-white/10">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2 items-center">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-white">
                404 Page Not Found
              </h1>
            </div>

            <p className="mt-4 text-sm text-gray-400 mb-6">
              The page you're looking for doesn't exist.
            </p>

            <Link href="/">
              <Button className="w-full">Go to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}

export default NotFound;
