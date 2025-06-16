"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
type Breadcrumb = {
  title: string;
  href?: string;
};
const NavigationTab = ({ breadcrumb }: { breadcrumb: Breadcrumb[] }) => {
  return (
    <div className="p-3 border-b-2 border-t font-medium border-y-mid-grey text-xs px-10 tracking-[.12rem] lg:px-20">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < breadcrumb.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default NavigationTab;
