import React, { useState } from 'react';

import { Tabs, TabsContent, TabsTrigger } from '@/components/ui/tabs';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { BarChart3 } from 'lucide-react';



// IMPORTANT: Make sure the Header component is NOT imported here

// import Header from './Header'; // <--- REMOVE OR COMMENT OUT THIS LINE



const DashboardTabs = () => {

  const [activeTab, setActiveTab] = useState('dashboard');



  return (

    // NOTE: This main div should not contain the Header.

    // The Header will be rendered at a higher level of your application.

    <div className="flex-1 min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">

      {/* REMOVE OR COMMENT OUT ANY LINE THAT RENDERS <Header /> HERE.

          For example, if you had:

          <Header />

          YOU MUST REMOVE IT. */}



      {/* Main Content Area - This is where the tabs and dashboard content will go */}

      <div className="flex-1 p-4 md:p-6">

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">

        

          <TabsContent value="dashboard" className="space-y-6">

            {/* Power BI Dashboard Container */}

            <Card className="border-0 shadow-lg bg-gray-900 text-white">

              {/* <CardHeader className="bg-gray-800 border-b border-gray-700">

                <CardTitle className="text-lg font-semibold flex items-center text-white">

                  <BarChart3 className="w-5 h-5 mr-2 text-drivelytics-purple-primary" />

                  Market Analysis Dashboard

                </CardTitle>

                <CardDescription className="text-gray-300">

                  Visualize your real-time data and make strategic decisions.

                </CardDescription>

              </CardHeader> */}

              <CardContent className="p-0">

                <div className="w-full h-[800px] bg-gray-900 rounded-b-lg flex items-center justify-center border border-gray-700 relative overflow-hidden">

                  {/* Your Power BI embedded URL goes here */}

                  <iframe

                    title="SynqAuto - v3"

                    width="100%" // Set to 100% to fill the container

                    height="100%" // Set to 100% to fill the container

                    src="https://app.powerbi.com/view?r=eyJrIjoiNDViZWYzM2QtYzU2OS00NWJiLWJmMDgtYzVhNDJjYmU2NzU0IiwidCI6IjkzN2JjYzgyLWZkYmYtNGYwMC1hOWUxLTUyN2U3NWUxMzU1MyIsImMiOjR9&pageName=a81fd906e6da8db9b557"

                    frameBorder="0"

                    allowFullScreen={true}

                    className="absolute inset-0" // Position absolutely to cover the entire div

                  ></iframe>

                  

                  {/* Fallback content if the iframe doesn't load. This will be covered by the iframe if it loads correctly. */}

                 

                </div>

              </CardContent>

            </Card>

          </TabsContent>

        </Tabs>

      </div>

    </div>

  );

};



export default DashboardTabs;