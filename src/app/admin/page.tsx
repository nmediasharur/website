"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MOCK_LEADS = [
  { id: 1, name: "Rahul M.", business: "Urban Fitness", email: "rahul@example.com", service: "Paid Ads", status: "New", date: "2026-06-20" },
  { id: 2, name: "Priya S.", business: "Luxe Interiors", email: "priya@example.com", service: "Social Media", status: "Contacted", date: "2026-06-21" },
];

export default function AdminDashboard() {
  const [leads] = useState(MOCK_LEADS);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-white/60">Manage your website content and leads.</p>
      </div>

      <Tabs defaultValue="leads" className="space-y-6">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="leads" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Leads CRM</TabsTrigger>
          <TabsTrigger value="pricing" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Pricing</TabsTrigger>
          <TabsTrigger value="reels" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Instagram Reels</TabsTrigger>
          <TabsTrigger value="testimonials" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Testimonials</TabsTrigger>
        </TabsList>

        <TabsContent value="leads" className="space-y-4">
          <Card className="bg-black border-white/10 text-white">
            <CardHeader>
              <CardTitle>Recent Leads</CardTitle>
              <CardDescription className="text-white/60">You have {leads.length} new leads this week.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-white/10 hover:bg-white/5">
                    <TableHead className="text-white/60">Name</TableHead>
                    <TableHead className="text-white/60">Business</TableHead>
                    <TableHead className="text-white/60">Service</TableHead>
                    <TableHead className="text-white/60">Date</TableHead>
                    <TableHead className="text-white/60">Status</TableHead>
                    <TableHead className="text-white/60 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id} className="border-white/10 hover:bg-white/5">
                      <TableCell className="font-medium">
                        <div>{lead.name}</div>
                        <div className="text-xs text-white/50">{lead.email}</div>
                      </TableCell>
                      <TableCell>{lead.business}</TableCell>
                      <TableCell>{lead.service}</TableCell>
                      <TableCell>{lead.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={lead.status === 'New' ? 'border-red-500 text-red-500' : 'border-green-500 text-green-500'}>
                          {lead.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="hover:bg-white/10 hover:text-white">View</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing">
          <Card className="bg-black border-white/10 text-white">
            <CardHeader>
              <CardTitle>Pricing Plans Editor</CardTitle>
              <CardDescription className="text-white/60">Update your pricing data. (UI Mockup for now)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="grid grid-cols-3 gap-4">
                 <div className="p-4 border border-white/10 rounded-lg">
                   <h4 className="font-bold mb-2">Starter Plan</h4>
                   <Input defaultValue="₹4,999" className="bg-black/50 border-white/20 mb-2" />
                   <Button variant="secondary" className="w-full">Save Changes</Button>
                 </div>
                 <div className="p-4 border border-red-500/50 rounded-lg relative">
                   <Badge className="absolute -top-3 left-4 bg-red-600">Popular</Badge>
                   <h4 className="font-bold mb-2">Growth Plan</h4>
                   <Input defaultValue="₹9,999" className="bg-black/50 border-white/20 mb-2" />
                   <Button variant="secondary" className="w-full">Save Changes</Button>
                 </div>
               </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reels">
           <Card className="bg-black border-white/10 text-white">
            <CardHeader>
              <CardTitle>Manage Reels</CardTitle>
              <CardDescription className="text-white/60">Add or remove Instagram Reel URLs.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex gap-2">
                 <Input placeholder="Instagram Reel URL" className="bg-black/50 border-white/20" />
                 <Button className="bg-red-600 hover:bg-red-700 text-white">Add Reel</Button>
               </div>
               <div className="mt-4 space-y-2">
                 <div className="flex justify-between items-center p-3 bg-white/5 border border-white/10 rounded">
                   <span className="text-sm text-white/80">https://www.instagram.com/p/C-0z928P1Lh</span>
                   <Button variant="destructive" size="sm">Remove</Button>
                 </div>
               </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="testimonials">
           <Card className="bg-black border-white/10 text-white">
            <CardHeader>
              <CardTitle>Testimonials</CardTitle>
              <CardDescription className="text-white/60">Manage client reviews.</CardDescription>
            </CardHeader>
            <CardContent>
               <Button className="bg-red-600 hover:bg-red-700 text-white mb-4">Add New Testimonial</Button>
               <Table>
                 <TableHeader>
                   <TableRow className="border-white/10">
                     <TableHead>Client</TableHead>
                     <TableHead>Review</TableHead>
                     <TableHead className="text-right">Actions</TableHead>
                   </TableRow>
                 </TableHeader>
                 <TableBody>
                   <TableRow className="border-white/10">
                     <TableCell>Rahul M.</TableCell>
                     <TableCell className="max-w-[200px] truncate text-white/60">N MEDIA completely transformed our online presence...</TableCell>
                     <TableCell className="text-right"><Button variant="ghost" size="sm" className="text-red-400">Delete</Button></TableCell>
                   </TableRow>
                 </TableBody>
               </Table>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
}
