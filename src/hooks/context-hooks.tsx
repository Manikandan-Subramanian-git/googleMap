import { useContext } from "react";
import { SingletonContext } from "../context/singleton-context";

export const useSingleton = ()=> useContext(SingletonContext)