import { environment } from '../../environments/environment';

export class ApiUrl {
  private static baseUrl = environment.baseUrl;
  public static professional = environment.baseUrl + 'professional-profile';
  public static contractor = environment.baseUrl + 'contractor-register';
  public static login = environment.baseUrl + 'login';
  public static contractualApprove = environment.baseUrl + 'contract-approval';
  public static professioanlApprove =
    environment.baseUrl + 'professional-approval';
  public static contractualSign = environment.baseUrl + 'contract-sign';
  public static professionalSign = environment.baseUrl + 'professional-sign';
  public static education = environment.baseUrl + "education";
  public static employmentRecord = environment.baseUrl + "employment-record";
  public static conEmploymentRecord = environment.baseUrl + "contractor-employee-record";
    //contractor-employee-record
  public static constructionProperty = environment.baseUrl + "construction-property";
  public static projects = environment.baseUrl + "projects";
  public static shareholders = environment.baseUrl + "shareholders";
  public static professionalPayment = environment.baseUrl + "professional-payment";
  public static contractualPayment = environment.baseUrl + "contract-payment";
}
