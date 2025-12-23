import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { students } from "@/constants/students";

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {students.map(
                        ({ rollNumber, name, department, goal, section }) => (
                            <Card
                                key={rollNumber}
                                className="group border border-border/50 bg-card/80 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                            >
                                <CardHeader className="space-y-1">
                                    <CardTitle className="text-lg font-semibold tracking-tight">
                                        {name}
                                    </CardTitle>
                                    <CardDescription className="text-xs font-mono text-muted-foreground">
                                        {rollNumber}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {goal}
                                    </p>
                                </CardContent>

                                <CardFooter className="flex flex-wrap gap-2">
                                    <Badge variant="secondary">
                                        {department}
                                    </Badge>
                                    <Badge variant="outline">
                                        Section {section}
                                    </Badge>
                                </CardFooter>
                            </Card>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}
