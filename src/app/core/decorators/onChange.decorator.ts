export function OnChanges<V>(callbackFn: (value: V) => void) {
    const pseudoKey = Symbol();

    return function <T>(target: T | Function, key: string) {
        Object.defineProperty(target, key, {
            get() {
                return this[pseudoKey];
            },
            set(val: V) {
                this[pseudoKey] = val;
                callbackFn.call(this, val)
            }
        });
    };
}