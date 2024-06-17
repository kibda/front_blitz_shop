"use client";

import { useEffect, useState } from "react";
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppContext } from "@/contexts/UserContext";
import axios from "axios";



export function Account() {
  const searchParams = useSearchParams();
  let tab = searchParams.get('tab');
  const {userDataContxt, setUserDataContxt} = useAppContext();
  const [userReviews, setUserReviews] = useState([]);

  const [activeTab, setActiveTab] = useState(tab || "bought-products");
  const router = useRouter();

  useEffect(() => {
   
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}products/review/user/`, { withCredentials: true })
    .then((response) => {
      setUserReviews(response.data.reviews);
    })
    .catch((error) => {
      console.error('Failed to fetch user reviews:', error);
    });
  }, []);

  const boughtProducts = [
    {
      id: 1,
      image: "/placeholder.svg",
      name: "Glimmer Lamps",
      purchaseDate: "2023-06-01",
    },
    {
      id: 2,
      image: "/placeholder.svg",
      name: "Aqua Filters",
      purchaseDate: "2023-04-15",
    },
    {
      id: 3,
      image: "/placeholder.svg",
      name: "Eco Planters",
      purchaseDate: "2023-02-28",
    },
    {
      id: 4,
      image: "/placeholder.svg",
      name: "Zest Juicers",
      purchaseDate: "2023-01-10",
    },
  ];

  

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 h-min-screen">
      <Tabs className="w-full max-w-3xl mx-auto" defaultValue={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex border-b border-gray-200 dark:border-gray-800">
          <TabsTrigger value="bought-products">Bought Products</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent className="pt-6" value="bought-products">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {boughtProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-950 rounded-lg shadow-sm overflow-hidden">
                <img src="/placeholder.svg" alt={product.name} width={300} height={200} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Purchased on {product.purchaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent className="pt-6" value="reviews">
          <div className="space-y-6">
            {userReviews.map((review) => (
              <div key={review.id} className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-4 hover:shadow-lg hover:shadow-slate-200 hover:cursor-pointer "
              onClick={() => {
                router.push(`/products/view/${review.product.id}`);
              }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{review.product.product_name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} className={`w-5 h-5 ${index < review.rating ? "fill-primary" : "fill-muted stroke-muted-foreground"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent className="pt-6" value="settings">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Update your profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input defaultValue="John Doe" id="name" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input defaultValue="john@example.com" id="email" type="email" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Change Password</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Receive email updates</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>Delete account</span>
                  <Button variant="destructive">Delete</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
