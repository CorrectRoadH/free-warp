import { FaGithub, FaTwitter} from "react-icons/fa";
import Button from "./components/button";
import Container from "./components/container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-5 bg-violet-400">
      <Container
        title="项目介绍"
      >
        <div className="flex flex-col gap-2 text-white">       
          <div>
            把 WARP 的节点转换成订阅地址，让你可以在各种客户端上使用 WARP 节点。
          </div>

          <div className="flex gap-2">
            <a className="flex gap-1" target="_blank" href="https://github.com/vvbbnn00/WARP-Clash-API">
              <FaGithub className="m-auto"/>
              <div className="m-auto">
                GitHub
              </div>
            </a>

            <a className="flex gap-1" target="_blank" href="https://twitter.com/correctroad">
              <FaTwitter className="m-auto"/>
              <div className="m-auto">
                Twitter
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
            url="https://warp.zeabur.app/api/clash?best=false&randomName=true"
          />
          <Button 
            text="自动导入 Clash"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="clash://install-config?url=https%3A%2F%2Fwarp.zeabur.app%2Fapi%2Fclash%3Fbest%3Dfalse%26randomName%3Dtrue"
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
            url="https://warp.zeabur.app/api/clash?best=false&randomName=true"

          />
          <Button 
            text="自动导入 Surge(iOS only)"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="surge:///install-config?url=https%3A%2F%2Fwarp.zeabur.app%2Fapi%2Fclash%3Fbest%3Dfalse%26randomName%3Dtrue"

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
            url="clash://install-config?url=https%3A%2F%2Fwarp.zeabur.app%2Fapi%2Fclash%3Fbest%3Dfalse%26randomName%3Dtrue"

          />
          <Button 
            text="自动导入 QX"
            icon="copy"
            textColor="blue"
            backgroundColor="white"

            type="import"
            url="quantumult-x:///update-configuration?remote-resource=https%3A%2F%2Fwarp.zeabur.app%2Fapi%2Fclash%3Fbest%3Dfalse%26randomName%3Dtrue"

          />
        </>
      </Container>


      <div>
        Powered by <a target="_blank"  href="https://github.com/vvbbnn00/WARP-Clash-API">WARP Clash API</a> and <a target="_blank"  href="https://1.1.1.1/">WARP+</a>
      </div>
    </main>
  );
}
