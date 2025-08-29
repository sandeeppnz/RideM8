import { Redirect } from "expo-router";
import "./global.css";

const  Index = () => {
  return <Redirect href="/(auth)/welcome" />;
}

export default Index;
