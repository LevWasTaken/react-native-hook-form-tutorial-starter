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
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [confirmPwd, setConfirmPwd] = React.useState("");

    return (
      <ScrollView
        style={tailwind("flex flex-1")}
        contentContainerStyle={tailwind(" p-4 ")}
      >
        <Text style={tailwind("font-bold text-xl mt-2")}>
          Création de compteuh
        </Text>
        <InputGroup
          label="Préom"
          value={firstName}
          placeholder="Marie"
          onChangeText={setFirstName}
        />
        <InputGroup
          label="Nom"
          value={lastName}
          placeholder="Berry"
          onChangeText={setLastName}
        />
        <InputGroup
          label="Email"
          value={email}
          placeholder="marie.berry@mail.com"
          onChangeText={setEmail}
          type="email-address"
        />
        <InputGroup
          label="Mot de passe"
          value={pwd}
          onChangeText={setPwd}
          password
        />
        <InputGroup
          label="Confirmation de mot de passe"
          value={confirmPwd}
          onChangeText={setConfirmPwd}
          password
        />
        <View style={tailwind("flex-grow")} />
        <Button onPress={signup}>Créer mon compte</Button>
      </ScrollView>
    );
  };
