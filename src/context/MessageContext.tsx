import React, { createContext, useContext } from "react";
import { message } from "antd";

type MessageType = "success" | "error" | "info" | "warning";

interface MessageContextType {
  showMessage: (content: string, type?: MessageType) => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = (content: string, type: MessageType = "info") => {
    messageApi.open({
      type,
      content,
    });
  };

  return (
    <MessageContext.Provider value={{ showMessage }}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = (): MessageContextType => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error(
      "useMessageContext debe usarse dentro de <MessageProvider>"
    );
  }
  return context;
};
