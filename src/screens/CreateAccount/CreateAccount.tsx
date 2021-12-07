import React from "react";
import { ScrollView, Text, View } from "react-native";

import { tailwind } from "tailwind";
import { Button } from "~/components/Button";
import { InputGroup } from "~/components/InputGroup";

interface CreateAccountProps {}

export const CreateAccount: React.FunctionComponent<CreateAccountProps> =
  ({}) => {
    const signup = () => {
      console.log("Create account here...");
    };

    const [firstName, setFirstName] = React.useState("");

    return (
      <ScrollView
        style={tailwind("flex flex-1")}
        contentContainerStyle={tailwind(" p-4 ")}
      >
        <Text style={tailwind("font-bold text-xl mt-2")}>
          Création de compte
        </Text>
        <InputGroup
          label="Préom"
          value={firstName}
          placeholder="Marie"
          onChangeText={setFirstName}
        />
        <InputGroup
          label="Nom"
          value={firstName}
          placeholder="Berry"
          onChangeText={setFirstName}
        />
        <InputGroup
          label="Email"
          value={firstName}
          placeholder="marie.berry@mail.com"
          onChangeText={setFirstName}
          type="email-address"
        />
        <InputGroup
          label="Mot de passe"
          value={firstName}
          onChangeText={setFirstName}
          password
        />
        <InputGroup
          label="Confirmation de mot de passe"
          value={firstName}
          onChangeText={setFirstName}
          password
        />
        <View style={tailwind("flex-grow")} />
        <Button onPress={signup}>Créer mon compte</Button>
      </ScrollView>
    );
  };
