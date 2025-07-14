export default function BarCode({ value }: { value: string }) {
  useEffect(() => {
    JsBarcode('#barcode', value, { displayValue: false, width: 1, height: 50 });
  }, [value]);

  return <svg id="barcode" />;
}
