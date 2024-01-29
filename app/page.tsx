import { FaGithub, FaTwitter} from "react-icons/fa";
import Button from "./components/button";
import Container from "./components/container";
import QRCode from "./components/qrcode";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-5 bg-violet-400">
      <Container
        title="项目介绍"
      >
        <div className="flex flex-col gap-2 text-white">       
          <div>
            把 WARP 的节点转换成订阅地址，让你可以在各种客户端上通过订阅使用 WARP+ 节点。
          </div>

          <div>
            本项目 Free & Open Source，欢迎 Star 。
          </div>

          <div className="flex gap-2 flex-wrap">
            <a className="flex gap-1" target="_blank" href="https://github.com/vvbbnn00/WARP-Clash-API">
              <FaGithub className="m-auto"/>
              <div className="m-auto">
                GitHub
              </div>
            </a>

            <a className="flex gap-1" target="_blank" href="https://twitter.com/intent/follow?screen_name=correctroad">
              <FaTwitter className="m-auto"/>
              <div className="m-auto">
                Follow Twitter
              </div>
            </a>
          </div>          
        </div>

      </Container>

      <Container
        title="Clash"
      >
        <>
          <Button 
            text="复制 Clash 订阅地址"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="link"
            url="https://subs.zeabur.app/clash"
          />
          <Button 
            text="自动导入 Clash"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="clash://install-config?url=https%3A%2F%2Fsubs.zeabur.app%2Fclash"
          />
        </>
      </Container>
      
      <Container
        title="Surge"
      >
        <>
          <Button 
            text="复制 Surge 订阅地址"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="link"
            url="https://subs.zeabur.app/surge"

          />
          <Button 
            text="自动导入 Surge(iOS only)"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="surge:///install-config?url=https%3A%2F%2Fsubs.zeabur.app%2Fsurge"

          />
        </>
      </Container>

      <Container
        title="iOS"
      >
        <>
          <Button 
            text="自动导入 Shadowrocket"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="clash://install-config?url=https%3A%2F%2Fsubs.zeabur.app%2Fclash"

          />
          <Button 
            text="自动导入 QX"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="quantumult-x:///update-configuration?remote-resource=https%3A%2F%2Fsubs.zeabur.app%2Fclash"

          />
        </>
      </Container>

      <Container
        title="安卓"
      >
        <>
          <Button 
            text="复制 WireGuard 配置"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="link"
            url="https://subs.zeabur.app/wireguard"

          />
          
          <QRCode />

        <Button 
            text="下载 WireGuard"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="wireguard.apk"
          />

        </>
      </Container>



      <div>
        Powered by <a target="_blank"  href="https://github.com/vvbbnn00/WARP-Clash-API">WARP Clash API</a> and <a target="_blank"  href="https://1.1.1.1/">WARP+</a>
      </div>
    </main>
  );
}
