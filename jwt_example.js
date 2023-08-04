const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// Create a JWT
const payload = { userId: 123, role: "admin" };
const secretKey = crypto.randomBytes(32).toString("hex");
console.log("Generated Secret Key:", secretKey);

const token = jwt.sign(payload, secretKey);
console.log("Generated JWT:", token);

// Verify a JWT
try {
  const decoded = jwt.verify(token, secretKey);
  console.log("Decoded JWT:", decoded);
} catch (error) {
  console.error("JWT verification failed:", error.message);
}


O/p->
// Generated Secret Key: cdda3e6d1ebcc9decf684723577c7d93d4cb04c4a77630ac59824fd390587134
// Generated JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywicm9sZSI6ImFkbWluIiwiaWF0IjoxNjkxMTQ0MzQyfQ.szHYuCdWJXquztwjUPU69VZ5GOJwK1R70GJG4BgJa7M
// Decoded JWT: { userId: 123, role: 'admin', iat: 1691144342 }
