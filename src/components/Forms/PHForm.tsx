import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type IFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & IFormConfig;

const PHForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
}: TFormProps) => {
  const formConfig: IFormConfig = {};
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
