import React from "react";
import {
  createBrowserRouter } from "react-router-dom";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import AboutUs from "pages/AboutUs";
import Listing from "pages/Listing";
import PropertyDetails from "pages/PropertyDetails";
import AgentList from "pages/AgentList";
import ListingMapView from "pages/ListingMapView";
import ContactPage from "pages/ContactPage";
import FAQ from "pages/FAQ";
import PrivacyPolicy from "pages/PrivacyPolicy";
import License from "pages/License";
import AgentProfile from "pages/AgentProfile";
import App from "App";


const ProjectRoutes = () => {
  let element = createBrowserRouter([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "aboutus",
          element: <AboutUs />,
        },
        {
          path: "listing",
          element: <Listing />,
        },
        {
          path: "propertydetails",
          element: <PropertyDetails />,
        },
        {
          path: "agentlist",
          element: <AgentList />,
        },
        {
          path: "listingmapview",
          element: <ListingMapView />,
        },
      ],
    },

    {
      path: "contactpage",
      element: <ContactPage />,
    },
    {
      path: "faq",
      element: <FAQ />,
    },
    {
      path: "privacypolicy",
      element: <PrivacyPolicy />,
    },
    {
      path: "license",
      element: <License />,
    },
    {
      path: "agentprofile",
      element: <AgentProfile />,
    },
  ]);

  return element;
};


export default ProjectRoutes;
