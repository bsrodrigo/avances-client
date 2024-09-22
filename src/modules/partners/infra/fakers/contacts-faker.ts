import { faker } from "@faker-js/faker";

import { Contact } from "@/modules/partners/models";

export const ContactsFaker = (dataLength: number = 20): Contact[] => {
  const contacts = Array.from(Array(dataLength).keys()).map((index) => {
    return {} as Contact;
    return {
      name: faker.person.fullName(),
      phones: [
        {
          number: faker.phone.number({ style: "international" }),
          note: faker.lorem.sentence(),
        },
        {
          number: faker.phone.number({ style: "international" }),
          note: faker.lorem.sentence(),
        },
      ],
      emails: [
        {
          email: faker.internet.email(),
          note: faker.lorem.sentence(),
        },
        {
          email: faker.internet.email(),
          note: faker.lorem.sentence(),
        },
      ],
      note: faker.lorem.sentence(),
    } as Contact;
  });

  return contacts;
};
