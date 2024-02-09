const LOGIC_LIB_NAME = 'libil2cpp.so';
const HIT_OBSTACLE_FUNCTION_RVA = 0x187955C;

setTimeout(() => {
    var il2cpp_base = Module.findBaseAddress(LOGIC_LIB_NAME);
    while (il2cpp_base == null)
    {
        il2cpp_base = Module.findBaseAddress(LOGIC_LIB_NAME);
    }

    var hit_obstacle_function_address = il2cpp_base.add(HIT_OBSTACLE_FUNCTION_RVA);

    Interceptor.replace(
        hit_obstacle_function_address,
        new NativeCallback(
            (a, b, c, d) => {
                // NOTE: just.. do nothing 😊
            },
            "void",
            ["pointer", "pointer", "pointer", "pointer"]
        )
    );

    Interceptor.flush();
}, 10000);
