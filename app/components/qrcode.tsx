"use client";
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import "./qc.css"
import QRCodeComponent from "react-qr-code";
import { useState } from 'react';

const QRCode = () => {
    const [value, setValue] = useState('');
    return (
        <Dialog.Root>
        <Dialog.Trigger asChild>
            <div
                className="flex rounded-2xl p-2 hover:shadow-lg cursor-pointer hover:-translate-y-1 duration-300"
                style={{
                    backgroundColor: "white",
                }}
                onClick={()=>{
                  fetch('https://subs.zeabur.app/wireguard')
                  .then(res => res.text())
                  .then(res => {
                      setValue(res)
                  })
          
                }}
            >
                <div className="m-auto"
                    style={{
                        color: "blue",
                    }}
                >通过二维码导入 WireGuard 配置</div>
        </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">二维码</Dialog.Title>
            <Dialog.Description className="DialogDescription">
                WireGuard 配置二维码
            </Dialog.Description>

            <QRCodeComponent value={value} />

            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    
    )
}

export default QRCode