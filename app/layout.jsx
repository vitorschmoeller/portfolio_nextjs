"use client"
import {JetBrains_Mono} from "next/font/google"
import "./globals.css";
import {Provider} from "react-redux"
//components
import { PageTransition } from "../components/PageTransition";
import {Header} from "../components/Header"
import { StairTransition } from "@/components/StairTransition";
import store from "@/store";

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
})



export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={jetBrainsMono.variable}
      >
        <Provider store={store}>
          <Header />
          <PageTransition>
            <StairTransition />
            {children}
          </PageTransition>
        </Provider>
      </body>
    </html>
  );
}
