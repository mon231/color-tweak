import "frida-il2cpp-bridge";

Il2Cpp.perform(() => {
    const GameImage = Il2Cpp.domain.assembly("Assembly-CSharp").image;

    const ColorBall = GameImage.class("ColorBall");
    const isInvincible = ColorBall.method<boolean>("isInvincible");

    isInvincible.implementation = () => true;
});
