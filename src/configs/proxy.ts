import { createProxyMiddleware } from "http-proxy-middleware";

export default (req: any, res: any) => {
  const proxy = createProxyMiddleware({
    target: "http://34.67.38.44:8081/jspace-service",
    changeOrigin: true,
    secure: true, // Bỏ qua kiểm tra chứng chỉ SSL nếu cần
  });

  return proxy(req, res, (err) => {
    if (err) {
      res.status(500).send("Proxy error");
    }
  });
};
