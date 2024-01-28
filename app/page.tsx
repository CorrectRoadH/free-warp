import Image from "next/image";
import Button from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-5 bg-violet-400">
      <div className="bg-violet-500	 w-5/6 p-12 rounded-2xl">
        本项目免费
      </div>

      <div className="bg-violet-500	 w-5/6 p-12 rounded-2xl">
        <h1>Clash</h1>

        <div className="flex gap-2">
          <Button 
            text="复制 Clash 订阅地址"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="link"
            url="https://warp.zeabur.app/api/clash?best=false&randomName=true"
          />
          <Button 
            text="自动导入 Clash"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="clash://install-config?url=https://warp.zeabur.app/api/clash?best=false&randomName=true"
          />
        </div>

      </div>
      
      <div className="bg-violet-500	 w-5/6 p-12 rounded-2xl">
        <h1>Surge</h1>

        <div className="flex gap-2">
          <Button 
            text="复制 Surge 订阅地址"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="link"
            url="https://warp.zeabur.app/api/clash?best=false&randomName=true"

          />
          <Button 
            text="自动导入 Surge"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="surge:///install-config?url=https://warp.zeabur.app/api/clash?best=false&randomName=true"

          />
        </div>
      </div>

      <div className="bg-violet-500	 w-5/6 p-12 rounded-2xl">
        <h1>iOS</h1>

        <div className="flex gap-2">
          <Button 
            text="自动导入 Shadowrocket"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="clash://install-config?url=https://warp.zeabur.app/api/clash?best=false&randomName=true"

          />
          <Button 
            text="自动导入 QX"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="quantumult-x:///update-configuration?remote-resource=https://warp.zeabur.app/api/clash?best=false&randomName=true"

          />
        </div>
      </div>


      <div>
        Powered by <a href="https://github.com/vvbbnn00/WARP-Clash-API">WARP Clash API</a> and <a href="https://1.1.1.1/">WARP+</a>
      </div>
    </main>
  );
}
