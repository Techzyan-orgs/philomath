import * as React from "react";
import { siteData } from "@/data/site";

export function JsonLd() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${siteData.brand.url}/#organization`,
    name: siteData.brand.name,
    alternateName: "Philomath Learnings",
    url: siteData.brand.url,
    logo: `${siteData.brand.url}${siteData.brand.logo.src}`,
    image: `${siteData.brand.url}${siteData.brand.emblem.src}`,
    description: siteData.brand.description,
    telephone: siteData.contact.phone,
    email: siteData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.contact.address.street,
      addressLocality: siteData.contact.address.locality,
      addressRegion: siteData.contact.address.region,
      postalCode: siteData.contact.address.postalCode || "700028",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.6186,
      longitude: 88.4237,
    },
    sameAs: [siteData.contact.mapsUrl],
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      ...siteData.courses.map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Course",
          name: course.title,
          description: course.summary,
          provider: {
            "@type": "EducationalOrganization",
            name: siteData.brand.name,
            sameAs: siteData.brand.url,
          },
          educationalCredentialAwarded: `${course.board} Board Examination Preparation`,
        },
      })),
      ...(siteData.collegeProgram
        ? [
            {
              "@type": "ListItem",
              position: siteData.courses.length + 1,
              item: {
                "@type": "Course",
                name: siteData.collegeProgram.title,
                description: siteData.collegeProgram.description,
                provider: {
                  "@type": "EducationalOrganization",
                  name: siteData.brand.name,
                  sameAs: siteData.brand.url,
                },
                educationalCredentialAwarded:
                  "Practical Software Engineering & Applied AI Industry Readiness",
              },
            },
          ]
        : []),
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
