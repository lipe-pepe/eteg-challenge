import { colorOptions } from "@/constants/colorOptions";
import { useController } from "react-hook-form";
import Select from "react-select";
import { Control } from "react-hook-form";
import { ClientFormData } from "@/schemas/clientSchema";

interface ColorSelectProps {
  control: Control<ClientFormData>;
  name: keyof ClientFormData;
}

export const ColorSelect = ({ control, name }: ColorSelectProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  return (
    <Select
      options={colorOptions}
      value={colorOptions.find((option) => option.value === value)}
      onChange={(val) => onChange(val?.value || "")}
      placeholder="Selecione..."
      styles={{
        control: (provided, state) => ({
          ...provided,
          width: "100%",
          padding: "2px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "1rem",
          boxShadow: state.isFocused
            ? "0 0 0 3px rgba(0, 112, 243, 0.2)"
            : undefined,
          borderColor: state.isFocused ? "#0070f3" : "#ccc",
          "&:hover": { borderColor: "#0070f3" },
          backgroundColor: "transparent",
        }),
      }}
      formatOptionLabel={(option) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              display: "inline-block",
              width: "16px",
              height: "16px",
              backgroundColor: option.value,
              borderRadius: "4px",
              marginRight: "8px",
            }}
          ></span>
          {option.label}
        </div>
      )}
    />
  );
};
