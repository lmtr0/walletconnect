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

        const tx = {
            from: provider.accounts[0], // Required
            to: "0x5725B315107417C73fc24D77af53Bc1544495050", // Required (for non contract deployments)
            data: "0x", // Required
            gasPrice: "0x02540be400", // Optional
            gas: "0x9c40", // Optional
            value: "0x00", // Optional
            nonce: "0x0114", // Optional
        };

        // await provider.createSession()
        await provider.killSession()

        // Sign transaction
        provider
            .signTransaction(tx)
            .then((result) => {
                // Returns signed transaction
                console.log(result);
            })
            .catch((error) => {
                // Error returned when rejected
                console.error(error);
            });
    };

	if (browser) main();
</script>

<h1>Connecting.....</h1>