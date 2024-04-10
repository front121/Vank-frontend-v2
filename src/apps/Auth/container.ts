import { Country } from "@/Context/Country/application/application";
import { HttpCountryRepository } from "@/Context/Country/infraestructura/infraestructura";
import { ValidateSendOtp } from "@/Context/ValidateSendOtp/application/application";
import { HttpValidateSendOtpRepository } from "@/Context/ValidateSendOtp/infraestructura/infraestructura";

import {
  ContainerModule,
  InjectableType,
  Injectables,
  interfaces,
} from "@ioc/index";

export const benefitsPortalInjectables = {
  Country: {
    id: "Country",
    class: Country,
    type: "class" as InjectableType,
  },
  CountryRepository: {
    id: "CountryRepository",
    class: HttpCountryRepository,
    type: "class" as InjectableType,
  },
  ValidateSendOtp: {
    id: "ValidateSendOtp",
    class: ValidateSendOtp,
    type: "class" as InjectableType,
  },
  ValidateSendOtpRepository: {
    id: "ValidateSendOtpRepository",
    class: HttpValidateSendOtpRepository,
    type: "class" as InjectableType,
  },
};

export const benefitsPortalContainer = new ContainerModule(
  (bind: interfaces.Bind) => {
    const _benefitsPortalInjectables: Injectables = benefitsPortalInjectables;
    console.log(_benefitsPortalInjectables);

    Object.entries(_benefitsPortalInjectables).forEach(([, payload]) => {
      bind(payload.id).to(payload.class).inSingletonScope();
    });
  }
);
