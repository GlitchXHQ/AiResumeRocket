import type { Schema, Struct } from '@strapi/strapi';

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'alien';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    currentlyWorking: Schema.Attribute.Boolean;
    endDate: Schema.Attribute.Date;
    jobTitle: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    state: Schema.Attribute.String;
    workSummary: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'experience.experience': ExperienceExperience;
    }
  }
}
