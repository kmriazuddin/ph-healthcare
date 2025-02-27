import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meat?: IMeta;
};

export type IGenericErrorType = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export const Gender = ["MALE", "FEMALE"];
