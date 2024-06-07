import { createProxyMiddleware } from "http-proxy-middleware";

export default (req: any, res: any) => {
  const proxy = createProxyMiddleware({
    target: "http://your-http-api-endpoint",
    changeOrigin: true,
    secure: false, // Bỏ qua kiểm tra chứng chỉ SSL nếu cần
  });

  return proxy(req, res, (err) => {
    if (err) {
      res.status(500).send("Proxy error");
    }
  });
};
