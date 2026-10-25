local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer
local PlayerGui = LocalPlayer:WaitForChild("PlayerGui")

-- Hapus GUI lama jika ada
if PlayerGui:FindFirstChild("FischQuestFloatingUI") then
    PlayerGui.FischQuestFloatingUI:Destroy()
end

-- ScreenGui
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "FischQuestFloatingUI"
screenGui.ResetOnSpawn = false
screenGui.Parent = PlayerGui

-- Main Frame
local frame = Instance.new("Frame")
frame.Size = UDim2.new(0, 280, 0, 170)
frame.Position = UDim2.new(0.05, 0, 0.3, 0)
frame.BackgroundColor3 = Color3.fromRGB(18, 18, 18)
frame.BorderSizePixel = 0
frame.Active = true
frame.Draggable = true
frame.ClipsDescendants = true
frame.Parent = screenGui

local corner = Instance.new("UICorner")
corner.CornerRadius = UDim.new(0, 8)
corner.Parent = frame

local stroke = Instance.new("UIStroke")
stroke.Color = Color3.fromRGB(60, 60, 60)
stroke.Thickness = 1.5
stroke.Parent = frame

-- Title Bar
local titleBar = Instance.new("Frame")
titleBar.Size = UDim2.new(1, 0, 0, 32)
titleBar.BackgroundColor3 = Color3.fromRGB(28, 28, 28)
titleBar.BorderSizePixel = 0
titleBar.Parent = frame

local titleCorner = Instance.new("UICorner")
titleCorner.CornerRadius = UDim.new(0, 8)
titleCorner.Parent = titleBar

local title = Instance.new("TextLabel")
title.Size = UDim2.new(1, -70, 1, 0)
title.Position = UDim2.new(0, 10, 0, 0)
title.BackgroundTransparency = 1
title.Text = "Fanzz | Quest Detector"
title.TextColor3 = Color3.fromRGB(255, 255, 255)
title.TextSize = 13
title.Font = Enum.Font.SourceSansBold
title.TextXAlignment = Enum.TextXAlignment.Left
title.Parent = titleBar

-- Tombol Minimize (-)
local minBtn = Instance.new("TextButton")
minBtn.Size = UDim2.new(0, 24, 0, 24)
minBtn.Position = UDim2.new(1, -56, 0, 4)
minBtn.BackgroundColor3 = Color3.fromRGB(45, 45, 45)
minBtn.Text = "-"
minBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
minBtn.TextSize = 14
minBtn.Font = Enum.Font.SourceSansBold
minBtn.Parent = titleBar

local minCorner = Instance.new("UICorner")
minCorner.CornerRadius = UDim.new(0, 4)
minCorner.Parent = minBtn

-- Tombol Close (X)
local closeBtn = Instance.new("TextButton")
closeBtn.Size = UDim2.new(0, 24, 0, 24)
closeBtn.Position = UDim2.new(1, -28, 0, 4)
closeBtn.BackgroundColor3 = Color3.fromRGB(180, 40, 40)
closeBtn.Text = "×"
closeBtn.TextColor3 = Color3.fromRGB(255, 255, 255)
closeBtn.TextSize = 16
closeBtn.Font = Enum.Font.SourceSansBold
closeBtn.Parent = titleBar

local closeCorner = Instance.new("UICorner")
closeCorner.CornerRadius = UDim.new(0, 4)
closeCorner.Parent = closeBtn

-- Scrolling Container
local scroll = Instance.new("ScrollingFrame")
scroll.Size = UDim2.new(1, -16, 1, -42)
scroll.Position = UDim2.new(0, 8, 0, 36)
scroll.BackgroundTransparency = 1
scroll.BorderSizePixel = 0
scroll.ScrollBarThickness = 3
scroll.Parent = frame

local layout = Instance.new("UIListLayout")
layout.Padding = UDim.new(0, 4)
layout.SortOrder = Enum.SortOrder.LayoutOrder
layout.Parent = scroll

-- Logika Minimize & Restore
local isMinimized = false
minBtn.MouseButton1Click:Connect(function()
    isMinimized = not isMinimized
    if isMinimized then
        frame.Size = UDim2.new(0, 280, 0, 32)
        scroll.Visible = false
        minBtn.Text = "+"
    else
        frame.Size = UDim2.new(0, 280, 0, 170)
        scroll.Visible = true
        minBtn.Text = "-"
    end
end)

-- Logika Hapus UI
closeBtn.MouseButton1Click:Connect(function()
    screenGui:Destroy()
end)

local function clearQuestList()
    for _, child in ipairs(scroll:GetChildren()) do
        if child:IsA("TextLabel") then
            child:Destroy()
        end
    end
end

local function addQuestRow(displayText, isCompleted)
    local item = Instance.new("TextLabel")
    item.Size = UDim2.new(1, 0, 0, 22)
    item.BackgroundTransparency = 1
    item.Text = displayText
    item.TextSize = 13
    item.Font = Enum.Font.SourceSansSemibold
    item.TextXAlignment = Enum.TextXAlignment.Left
    item.TextWrapped = true
    
    if isCompleted then
        item.TextColor3 = Color3.fromRGB(80, 255, 120) -- Hijau
    else
        item.TextColor3 = Color3.fromRGB(255, 255, 255) -- Putih
    end
    
    item.Parent = scroll
end

-- Pemindaian Quest yang Lebih Luas & Akurat
local function scanQuests()
    clearQuestList()
    local foundQuests = {}
    local hud = PlayerGui:FindFirstChild("hud") or PlayerGui:FindFirstChild("HUD") or PlayerGui:FindFirstChild("Main")
    local searchRoot = hud or PlayerGui

    -- Pindai seluruh TextLabel yang relevan di PlayerGui
    for _, v in ipairs(searchRoot:GetDescendants()) do
        if v:IsA("TextLabel") and v.Text ~= "" and v.Parent ~= scroll then
            local parentName = v.Parent.Name:lower()
            local grandParentName = (v.Parent.Parent and v.Parent.Parent.Name:lower()) or ""
            local txt = v.Text

            -- Cek apakah elemen ada di container quest/tracker/side HUD
            local isQuestContainer = parentName:find("quest") or parentName:find("track") or parentName:find("side") or grandParentName:find("quest") or grandParentName:find("track")
            local isQuestPattern = txt:lower():find("catch") or txt:lower():find("deliver") or txt:find("%d+/%d+")

            if (isQuestContainer or isQuestPattern) and not txt:find("Fanzz") and not txt:find("QUESTS") then
                if not foundQuests[txt] then
                    foundQuests[txt] = true

                    -- Cek status selesai
                    local isDone = false
                    if txt:find("1/1") or txt:upper():find("COMPLETE") or txt:lower():find("done") or txt:find("✓") then
                        isDone = true
                    end

                    -- Parsing format: nama ikan (nama pulau)
                    local formatted = txt
                    local fish, island = txt:match("[Cc]atch%s+a%s+(.+)%s+at%s+(.+)")
                    if not fish then
                        fish, island = txt:match("[Cc]atch%s+(.+)%s+at%s+(.+)")
                    end

                    if fish and island then
                        fish = fish:gsub("%s*%[.*%]", ""):gsub("%s*%d+/%d+", "")
                        island = island:gsub("%s*%[.*%]", ""):gsub("%s*%d+/%d+", "")
                        formatted = fish .. " (" .. island .. ")"
                    else
                        formatted = txt:gsub("%s*%b[]", "")
                    end

                    addQuestRow("• " .. formatted, isDone)
                end
            end
        end
    end

    local count = 0
    for _ in pairs(foundQuests) do count = count + 1 end

    if count == 0 then
        addQuestRow("Belum ada quest aktif yang terdeteksi.", false)
    end

    scroll.CanvasSize = UDim2.new(0, 0, 0, layout.AbsoluteContentSize.Y)
end

-- Loop Pemindaian Otomatis (Tiap 1.5 Detik)
task.spawn(function()
    while task.wait(1.5) do
        pcall(scanQuests)
    end
end)
