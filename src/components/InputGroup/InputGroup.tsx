import React from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";
import tailwind from "tailwind-rn";

interface InputGroupProps {
  label?: string;
  placeholder?: string;
  value: string;
  password?: boolean;
  type?: KeyboardTypeOptions;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
}

export const InputGroup: React.FunctionComponent<InputGroupProps> = ({
  label,
  placeholder,
  value,
  password,
  type = "default",
  onChangeText,
  onBlur,
}) => {
  return (
    <View style={tailwind("py-2")}>
      {!!label && (
        <Text style={tailwind("mb-1 text-sm text-gray-800")}>{label}</Text>
      )}
      <TextInput
        style={tailwind("border border-gray-300 rounded-md px-3 py-1")}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={password}
        keyboardType={type}
      />
    </View>
  );
};
