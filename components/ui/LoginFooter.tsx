import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  FooterContainer,
  FooterLeft,
  IconImage,
  ExtraText,
  FooterRight,
  ConfigIcon,
} from "@/components/ui/stylesLogin";
import { Colors } from "../../constants/theme";


const { brand } = Colors;

interface LoginFooterProps {
  onConfigPress: () => void;
}

export const LoginFooter: React.FC<LoginFooterProps> = ({ onConfigPress }) => (
  <FooterContainer>
    <FooterLeft>
      <IconImage source={require("@/assets/images/icon_J&T.png")} />
      <ExtraText>
        Por J&T Colombia{"\n"}Derechos reservados
      </ExtraText>
    </FooterLeft>

    <FooterRight onPress={onConfigPress}>
      <ConfigIcon>
        <Ionicons name="settings-sharp" size={24} color={brand} />
      </ConfigIcon>
    </FooterRight>
  </FooterContainer>
);