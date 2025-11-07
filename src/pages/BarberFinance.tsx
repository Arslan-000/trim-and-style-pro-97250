import { DollarSign, TrendingUp, TrendingDown, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const revenueData = [
  { month: "Jan", amount: 12500 },
  { month: "Feb", amount: 14200 },
  { month: "Mar", amount: 13800 },
  { month: "Apr", amount: 15600 },
  { month: "May", amount: 16800 },
  { month: "Jun", amount: 18200 },
];

const expenses = [
  { id: 1, category: "Rent", amount: "$2,500", date: "Dec 1, 2024", type: "Fixed" },
  { id: 2, category: "Salaries", amount: "$8,300", date: "Dec 1, 2024", type: "Fixed" },
  { id: 3, category: "Supplies", amount: "$650", date: "Dec 5, 2024", type: "Variable" },
  { id: 4, category: "Electricity", amount: "$320", date: "Dec 10, 2024", type: "Utility" },
  { id: 5, category: "Marketing", amount: "$800", date: "Dec 12, 2024", type: "Variable" },
];

const BarberFinance = () => {
  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            Finance
          </h1>
          <p className="text-muted-foreground">Track revenue and expenses</p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <h3 className="text-3xl font-bold text-foreground mt-2">$18,200</h3>
                  <p className="text-sm text-green-400 flex items-center gap-1 mt-1">
                    <TrendingUp className="h-4 w-4" />
                    +12.5% from last month
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Expenses</p>
                  <h3 className="text-3xl font-bold text-foreground mt-2">$12,570</h3>
                  <p className="text-sm text-red-400 flex items-center gap-1 mt-1">
                    <TrendingDown className="h-4 w-4" />
                    +5.2% from last month
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Net Profit</p>
                  <h3 className="text-3xl font-bold text-foreground mt-2">$5,630</h3>
                  <p className="text-sm text-primary flex items-center gap-1 mt-1">
                    <TrendingUp className="h-4 w-4" />
                    +18.3% from last month
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="revenue" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
            <TabsTrigger value="summary">Summary</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="space-y-4">
            <Card className="bg-gradient-to-br from-card to-secondary border-border">
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {revenueData.map((item) => (
                    <div key={item.month} className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/10">
                      <span className="font-semibold">{item.month}</span>
                      <span className="text-primary font-bold text-lg">${item.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="expenses" className="space-y-4">
            <div className="flex justify-end">
              <Button className="bg-primary hover:bg-primary/90">Add Expense</Button>
            </div>
            
            <div className="space-y-4">
              {expenses.map((expense) => (
                <Card key={expense.id} className="bg-gradient-to-br from-card to-secondary border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-bold text-foreground">{expense.category}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {expense.date}
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="text-2xl font-bold text-foreground">{expense.amount}</div>
                        <div className="text-xs text-muted-foreground">{expense.type}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="summary" className="space-y-4">
            <Card className="bg-gradient-to-br from-card to-secondary border-border">
              <CardHeader>
                <CardTitle>Financial Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <span className="text-muted-foreground">Total Revenue</span>
                    <span className="text-2xl font-bold text-green-400">$18,200</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <span className="text-muted-foreground">Total Expenses</span>
                    <span className="text-2xl font-bold text-red-400">-$12,570</span>
                  </div>
                  
                  <div className="h-px bg-border" />
                  
                  <div className="flex justify-between items-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="font-semibold text-foreground">Net Profit</span>
                    <span className="text-3xl font-bold text-primary">$5,630</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  Export Report (PDF)
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BarberFinance;
