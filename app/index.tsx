import { Redirect } from "expo-router";
import "./global.css";

const  Index = () => {
  return <Redirect href="/(auth)/signup" />;
}

export default Index;
