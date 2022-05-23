import React from "react";
import { Column, Row } from "../Flex";
import { FormButton, FormInput, FormWrapper } from "./styled";

export interface FieldsProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export type FormConfig = {
  title?: string;
  subtitle?: string;
  fields: Array<Array<FieldsProps>>;
};

export type BuildFormProps = {
  config: FormConfig;
  onSumbit?: (data: any) => void;
};

const Form: React.FC<BuildFormProps> = ({ config, onSumbit }) => {
  const [formData, setFormData] = React.useState<any>({});

  React.useEffect(() => {
    const defaultFieldValues = config.fields.reduce(
      (acc: { [key: string]: any }, val) => {
        val.map((v) => {
          acc[v.name] = v.value;
        });
        return acc;
      },
      {}
    );

    setFormData(defaultFieldValues);
  }, []);
  const onInputChange = (e: any, inputName: string) => {
    setFormData({ ...formData, [inputName]: e.target.value });
  };

  return (
    <FormWrapper>
      <Column gap={2.5}>
        <Column gap={0.25}>
          <h2>{config.title}</h2>
          <h4>{config.subtitle}</h4>
        </Column>
        <>
          {config.fields.map((row, idx) =>
            !(config.fields.length - 1 === idx) ? (
              <Row justify="space-between" align="flex-end" gap={2.125}>
                {row.map((col) => (
                  <FormInput>
                    <label htmlFor={col.name}>{col.label}</label>
                    <input
                      name={col.name}
                      type={col.type}
                      placeholder={col.placeholder}
                      value={formData[col.name]}
                      onChange={(e) => onInputChange(e, col.name)}
                    />
                  </FormInput>
                ))}
              </Row>
            ) : (
              <Row justify="space-between" align="flex-end" gap={2.125}>
                {row.map((col) => (
                  <FormInput>
                    <label htmlFor={col.name}>{col.label}</label>
                    <input
                      name={col.name}
                      type={col.type}
                      placeholder={col.placeholder}
                      value={formData[col.name]}
                      onChange={(e) => onInputChange(e, col.name)}
                    />
                  </FormInput>
                ))}
                <FormButton onClick={() => onSumbit(formData)}>
                  Next Step
                </FormButton>
              </Row>
            )
          )}
        </>
      </Column>
    </FormWrapper>
  );
};

export default Form;
