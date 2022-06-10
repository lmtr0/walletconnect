<script lang="ts">
	import { browser } from '$app/env';
    import type WalletConnect from '@walletconnect/client';
    import WallectConnect from "@walletconnect/client"
    import QrModal from "@walletconnect/qrcode-modal"
    let provider: WalletConnect;

	const main = async () => {
        console.log('starting')
        provider = new WallectConnect({
            bridge: "https://bridge.walletconnect.org", // Required
            qrcodeModal: QrModal,
        })
        console.log('middle')
        
        console.log(provider)
        await provider.connect()
        console.log('Done')
        await provider.killSession()

    };

	if (browser) main();
</script>

<h1>Connecting.....</h1>