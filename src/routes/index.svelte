<script lang="ts">
	import { browser } from '$app/env';
    import WallectConnect from "@walletconnect/browser"
    import QrModal from "@walletconnect/qrcode-modal"

	const main = async () => {
        console.log('starting')
        const provider = new WallectConnect({
            bridge: "https://bridge.walletconnect.org", // Required
            qrcodeModal: QrModal,
        })
        console.log('middle')
        
        console.log(provider)
        await provider.connect()
        console.log('Done')
    };

	if (browser) main();
</script>
