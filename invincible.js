const LOGIC_LIB_NAME = 'libil2cpp.so';
const IS_INVINCIBLE_FUNCTION_RVA = 0xB2EDF8;

setTimeout(() => {
    var il2cpp_base = Module.findBaseAddress(LOGIC_LIB_NAME);
    while (il2cpp_base == null)
    {
        il2cpp_base = Module.findBaseAddress(LOGIC_LIB_NAME);
    }

    var is_invincible_function_address = il2cpp_base.add(IS_INVINCIBLE_FUNCTION_RVA);

    Interceptor.attach(
        is_invincible_function_address,
        {
            onLeave(retval) {
                retval.replace(1);
            }
        }
    );
}, 10000);
